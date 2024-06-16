import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';
import AuthGuard from '../../../../shared/utils/AuthGuard';

const user = false;

export const AppRouter = () => {
  return (
    <Suspense fallback={'Загрузка'}>
      <AuthGuard user={user}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))}
        </Routes>
      </AuthGuard>
    </Suspense>
  );
};