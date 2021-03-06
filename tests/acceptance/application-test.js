import destroyApp from '../helpers/destroy-app'
import startApp from '../helpers/start-app'
import {expect} from 'chai'
import {after, before, beforeEach, describe, it} from 'mocha'

describe('Acceptance: Application', function () {
  let application

  before(function () {
    application = startApp()
    server.loadFixtures()
  })

  after(function () {
    destroyApp(application)
  })

  describe('visit /', function () {
    beforeEach(function () {
      return visit('/')
    })

    it('redirects correct route', function () {
      expect(currentPath()).to.equal('demo')
    })
  })

  ;[
    'area',
    'button',
    'checkbox',
    'field',
    'helpers',
    'icons',
    'layout',
    'loading',
    'palette',
    'password',
    'radio',
    'scroll',
    'select',
    'toggle',
    'typography'
  ]
    .forEach((path) => {
      describe(`visit /${path}`, function () {
        beforeEach(function () {
          return visit(`/${path}`)
        })

        it('renders correct route', function () {
          expect(currentPath()).to.equal(path)
        })
      })
    })

  describe('visit /link', function () {
    beforeEach(function () {
      return visit('/link')
    })

    it('renders correct route', function () {
      expect(currentPath()).to.equal('link.index')
    })
  })
})
