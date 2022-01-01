import React from 'react';
import { Input } from './components/ui';

function App() {
  const [txt, setTxt] = React.useState('');

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-8 rounded-md bg-white">
        <Input
          id="test"
          name="test"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
