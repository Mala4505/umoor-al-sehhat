import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Person, Visit, Screen, ToastMessage } from './types';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AddEntryPage } from './pages/AddEntryPage';
import { RecordsPage } from './pages/RecordsPage';
import { PersonProfilePage } from './pages/PersonProfilePage';
import { ExportModal } from './components/ExportModal';
import { Toast } from './components/Toast';
import { personsApi } from './api/personsApi';
import { visitsApi } from './api/visitsApi';

const AUTH_KEY = 'umoor_auth';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => localStorage.getItem(AUTH_KEY) === 'true'
  );
  const [currentScreen, setCurrentScreen] = useState<Screen>(() =>
    localStorage.getItem(AUTH_KEY) === 'true' ? 'dashboard' : 'login'
  );
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);
  const [persons, setPersons] = useState<Person[]>([]);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);

  // Load persons on mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadInitialData();
    }
  }, [isAuthenticated]);

  const loadInitialData = async () => {
    try {
      setIsLoading(true);
      const allVisits = await visitsApi.getAllVisits();
      setVisits(allVisits);

      // We should also fetch all persons to ensure the records list is complete
      // even if some persons don't have visits yet (though unlikely in this flow)
      // For now, extract from visits to stay efficient
      const uniquePersonsMap = new Map();
      allVisits.forEach(v => {
        if (!uniquePersonsMap.has(v.personId)) {
          uniquePersonsMap.set(v.personId, {
            id: v.personId,
            gender: v.gender,
            age: v.age
          });
        }
      });
      setPersons(Array.from(uniquePersonsMap.values()));
    } catch (error) {
      console.error('Error loading initial data:', error);
      showToast('Error loading data', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useCallback((screen: Screen, personId?: string) => {
    if (personId !== undefined) setSelectedPersonId(personId);
    setCurrentScreen(screen);
  }, []);

  const handleLogin = useCallback(() => {
    localStorage.setItem(AUTH_KEY, 'true');
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setCurrentScreen('login');
  }, []);

  const showToast = useCallback(
    (message: string, type: 'success' | 'error') => {
      const id = Math.random().toString(36).substring(2, 9);
      setToast({
        id,
        message,
        type
      });
    },
    []
  );

  const handleAddPerson = useCallback(async (person: Person) => {
    try {
      const newPerson = await personsApi.createPerson(person);
      setPersons((prev) => {
        const exists = prev.some(p => p.id === newPerson.id);
        if (exists) return prev;
        return [...prev, newPerson];
      });
    } catch (error) {
      console.error('Error adding person:', error);
      showToast('Error saving person metadata', 'error');
      throw error;
    }
  }, [showToast]);

  const handleAddVisit = useCallback(async (visit: Visit) => {
    try {
      const newVisit = await visitsApi.addVisit(visit);
      setVisits((prev) => [...prev, newVisit]);
    } catch (error) {
      console.error('Error adding visit:', error);
      showToast('Error saving visit', 'error');
      throw error;
    }
  }, [showToast]);

  const handleDeleteVisit = useCallback(async (visitId: string) => {
    try {
      await visitsApi.deleteVisit(visitId);
      setVisits((prev) => prev.filter(v => v.id !== visitId));
      showToast('Visit deleted', 'success');
    } catch (error) {
      console.error('Error deleting visit:', error);
      showToast('Error deleting visit', 'error');
    }
  }, [showToast]);

  const selectedPerson = persons.find((p) => p.id === selectedPersonId) ?? null;
  const screenKey = currentScreen + (selectedPersonId ?? '');

  return (
    <div className="min-h-screen bg-slate-50">
      <AnimatePresence mode="wait">
        {currentScreen === 'login' && (
          <div key="login">
            <LoginPage onLogin={handleLogin} showToast={showToast} />
          </div>
        )}
        {currentScreen === 'dashboard' && isAuthenticated && (
          <div key="dashboard">
            <DashboardPage
              navigate={navigate}
              persons={persons}
              visits={visits}
              onLogout={handleLogout}
              onExport={() => setShowExportModal(true)}
            />
          </div>
        )}
        {currentScreen === 'addEntry' && isAuthenticated && (
          <div key="addEntry">
            <AddEntryPage
              navigate={navigate}
              onAddPerson={handleAddPerson}
              onAddVisit={handleAddVisit}
              persons={persons}
              showToast={showToast}
            />
          </div>
        )}
        {currentScreen === 'records' && isAuthenticated && (
          <div key="records">
            <RecordsPage
              navigate={navigate}
              persons={persons}
              visits={visits}
            />
          </div>
        )}
        {currentScreen === 'profile' && isAuthenticated && (
          <div key={screenKey}>
            <PersonProfilePage
              navigate={navigate}
              person={selectedPerson}
              visits={visits}
              showToast={showToast}
              onDeleteVisit={handleDeleteVisit}
            />
          </div>
        )}
      </AnimatePresence>

      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        persons={persons}
        visits={visits}
      />

      <Toast toast={toast} onDismiss={() => setToast(null)} />

      {isLoading && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
}