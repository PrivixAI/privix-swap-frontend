import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, useWalletModal, ConnectorNames } from 'psc-ui-kit'
import { connectorsByName } from 'connectors'
import useI18n from 'hooks/useI18n'

// No need to redeclare window.ethereum

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()
  const [currentChainId, setCurrentChainId] = useState<number | null>(null)

  useEffect(() => {
    const fetchChainId = async () => {
      if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.request === 'function') {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' })
          setCurrentChainId(parseInt(chainId as string, 16))
        } catch (error) {
          console.error('Error fetching chain ID:', error)
        }
      }
    }

    fetchChainId()
  }, [])

  const handleLogin = (connectorId: ConnectorNames) => {
    const connector = connectorsByName[connectorId]
    if (connector) {
      const expectedChainId = 16969696;
      if (currentChainId !== expectedChainId) {
        alert('Wrong chain ID. Please switch to the correct network.')
        return
      }
      activate(connector)
    }
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton