import { sessionStart, sessionEnd, pageHide, pageShow } from './session'
import {
  isBrowserEvent,
  isSessionStartEvent,
  isSessionEndEvent,
  isPageHideEvent,
  isPageShowEvent
} from './events'

test('sessionStart', () => {
  const event = sessionStart()
  expect(event.type).toEqual('session:start')
  expect(isBrowserEvent(event)).toEqual(true)
  expect(isSessionStartEvent(event)).toEqual(true)
})

test('sessionEnd', () => {
  const event = sessionEnd()
  expect(event.type).toEqual('session:end')
  expect(isBrowserEvent(event)).toEqual(true)
  expect(isSessionEndEvent(event)).toEqual(true)
})

test('pageHide', () => {
  const event = pageHide()
  expect(event.type).toEqual('page:hide')
  expect(isBrowserEvent(event)).toEqual(true)
  expect(isPageHideEvent(event)).toEqual(true)
})

test('pageShow', () => {
  const event = pageShow()
  expect(event.type).toEqual('page:show')
  expect(isBrowserEvent(event)).toEqual(true)
  expect(isPageShowEvent(event)).toEqual(true)
})
