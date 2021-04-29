import React, { FC, ReactElement } from 'react';
import { withTranslation } from 'react-i18next';
import Resume from './views/resume/Resume.container';
import Sidebar from './views/sidebar';
import './styles/global.css';
import { Main } from './App.style';

const App: FC = (): ReactElement => (
	<Main>
		<Sidebar />
		<Resume />
	</Main>
)

export default withTranslation()(App);
