import React, { FC, ReactElement } from 'react';
import Resume from './views/resume/Resume';
import Sidebar from './views/sidebar';
import './styles/tailwind.css'

const App: FC = (): ReactElement => (
	<div className="flex h-screen">
		<Sidebar />
		<Resume />
	</div>
)

export default App;
