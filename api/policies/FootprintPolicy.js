const _ = require('lodash')
const Boom = require('Boom')

/**
 * Footprint Policy
 *
 * Validate footprint requests; namely, that the path parameters represent
 * actual and correct models anda actions. Semantic ORM input validation is
 * performed by the FootprintService.
 *
 * @see http://hapijs.com/api#request-object
 */
module.exports = {

  /**
   * Create Policy.
   * @see FootprintController.create
   */
  create (request, reply) {
    if (!_.isPlainObject(request.payload) && !_.isArray(request.payload)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.payload')))
    }

    reply()
  },

  /**
   * Find Policy.
   * @see FootprintController.find
   */
  find (request, reply) {
    if (request.params.id && !_.isEmpty(request.query)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.find.mutex')))
    }

    reply()
  },

  /**
   * Update Policy.
   * @see FootprintController.update
   */
  update (request, reply) {
    if (request.params.id && !_.isEmpty(request.query)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.update.mutex')))
    }

    reply()
  },

  /**
   * Destroy Policy.
   * @see FootprintController.destroy
   */
  destroy (request, reply) {
    if (request.params.id && !_.isEmpty(request.query)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.destroy.mutex')))
    }

    reply()
  },

  /**
   * Create Association Policy.
   * @see FootprintController.createAssociation
   */
  createAssociation (request, reply) {
    if (!_.isPlainObject(request.payload)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.payload')))
    }

    reply()
  },

  /**
   * Find Association Policy.
   * @see FootprintController.findAssociation
   */
  findAssociation (request, reply) {
    if (request.params.childId && !_.isEmpty(request.query)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.find.mutex')))
    }

    reply()
  },

  /**
   * Update Association Policy.
   * @see FootprintController.updateAssociation
   */
  updateAssociation (request, reply) {
    if (request.params.childId && !_.isEmpty(request.query)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.update.mutex')))
    }

    reply()
  },

  /**
   * Destroy Association Policy.
   * @see FootprintController.destroyAssociation
   */
  destroyAssociation (request, reply) {
    if (request.params.childId && !_.isEmpty(request.query)) {
      return reply(Boom.preconditionFailed(this.__('errors.footprints.destroy.mutex')))
    }

    reply()
  }
}
