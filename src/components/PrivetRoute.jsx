import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivetRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  
  // إذا كان المستخدم مسجلاً الدخول، عرض المكون (children)، وإلا إعادة التوجيه إلى صفحة تسجيل الدخول
  return currentUser ? children : <Navigate to='/sign-in' />;
}
