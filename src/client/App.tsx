import React, { FC, ReactElement } from 'react';
import { withTranslation } from 'react-i18next';
import Resume from './views/resume/Resume.container';
import Sidebar from './views/sidebar';
import './styles/global.css';

const App: FC = (): ReactElement => (
	<div className="flex h-screen">
		<Sidebar />
		<Resume />
	</div>
)

export default withTranslation()(App);
