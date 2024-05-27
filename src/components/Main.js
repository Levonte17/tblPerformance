import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';

function Header(props) {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    )
  }
  
  export default Header;
  