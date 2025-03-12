import React, { useContext} from 'react';
import { Menu as UikitMenu, ConnectorNames } from 'psc-ui-kit';
import { useWeb3React } from '@web3-react/core';
import { allLanguages } from 'constants/localisation/languageCodes';
import { LanguageContext } from 'hooks/LanguageContext';
import useTheme from 'hooks/useTheme';
// import useGetLocalProfile from 'hooks/useGetLocalProfile';
import { connectorsByName } from 'connectors';
import links from './config';

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React();
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const { isDark, toggleTheme } = useTheme();
  // const profile = useGetLocalProfile();

  // const [mindperusd, setMindPerUsd] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchPrice = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/price');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setMindPerUsd(data.price);
  //     } catch (fetchError: any) {
  //       setError(fetchError.message);
  //     }
  //   };

  //   fetchPrice();
  // }, []);

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={(connectorId: ConnectorNames) => {
        const connector = connectorsByName[connectorId];
        if (connector) {
          activate(connector);
        }
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      // cakePriceUsd={mindperusd}
      // profile={profile}
      {...props}
    />
  );
};

export default Menu;
