import React from 'react';
import Card from './components/Card';
import TaskList from './components/TaskList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Day 1: Bootcamp Deliverables</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Props & Components</h2>
          <Card title="React Basics" description="Learning components" status="active" />
          <Card title="Tailwind CSS" description="Styling apps" status="active" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Interactive Task List</h2>
          <TaskList />
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">3. Event Handling (Form)</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;