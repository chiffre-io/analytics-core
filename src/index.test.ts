import { sessionStart, sessionEnd } from './session'
import {
  isBrowserEvent,
  isSessionStartEvent,
  isSessionEndEvent
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
