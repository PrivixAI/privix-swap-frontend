import { transparentize } from 'polished'
import React from 'react'
import { AlertTriangle } from 'react-feather'
import { Text } from 'psc-ui-kit'
import styled, { css } from 'styled-components'
import { AutoColumn } from '../Column'

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  background-color: ${({ theme }) => transparentize(0.95, theme.colors.primary)};
  border-radius: 8px;
`

export const ArrowWrapper = styled.div<{ clickable: boolean }>`
  padding: 4px;

  ${({ clickable }) =>
    clickable
      ? css`
          :hover {
            cursor: pointer;
            opacity: 0.85;
            transform: scale(1.05);
          }
        `
      : null}
`

export const SectionBreak = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => transparentize(0.8, theme.colors.tertiary)};
  margin: 8px 0;
`

export const BottomGrouping = styled.div`
  margin-top: 1.5rem;
`

export const ErrorText = styled(Text)<{ severity?: 0 | 1 | 2 | 3 | 4 }>`
  color: ${({ theme, severity }) =>
    severity === 3 || severity === 4
      ? transparentize(0.1, theme.colors.failure)
      : severity === 2
      ? theme.colors.binance
      : severity === 1
      ? transparentize(0.5, theme.colors.text)
      : theme.colors.success};
  font-weight: 500;
`

export const StyledBalanceMaxMini = styled.button`
  height: 24px;
  width: 24px;
  background-color: ${({ theme }) => transparentize(0.1, theme.colors.invertedContrast)};
  border: none;
  border-radius: 50%;
  padding: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSubtle};
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }
  :focus {
    background-color: ${({ theme }) => theme.colors.tertiary};
    outline: none;
  }
`

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

const SwapCallbackErrorInner = styled.div`
  background-color: ${({ theme }) => transparentize(0.85, theme.colors.failure)};
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  width: 100%;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  margin-top: -1.5rem;
  color: ${({ theme }) => theme.colors.failure};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  p {
    padding: 0;
    margin: 0;
    font-weight: 600;
  }
`

const SwapCallbackErrorInnerAlertTriangle = styled.div`
  background-color: ${({ theme }) => transparentize(0.85, theme.colors.failure)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`

export function SwapCallbackError({ error }: { error: string }) {
  return (
    <SwapCallbackErrorInner>
      <SwapCallbackErrorInnerAlertTriangle>
        <AlertTriangle size={24} />
      </SwapCallbackErrorInnerAlertTriangle>
      <p>{error}</p>
    </SwapCallbackErrorInner>
  )
}

export const SwapShowAcceptChanges = styled(AutoColumn)`
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem;
  border-radius: 12px;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: 600;
`
