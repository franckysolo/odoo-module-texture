# -*- coding: utf-8 -*-
from odoo import http

class Texture(http.Controller):
    @http.route('/texture', auth='public', website=True)
    def index(self, **kw):
        Textures = http.request.env['texture.textures']
        return http.request.render('texture.index', {
            'textures': Textures.search([])
        })

#     @http.route('/texture/texture/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('texture.listing', {
#             'root': '/texture/texture',
#             'objects': http.request.env['texture.texture'].search([]),
#         })

#     @http.route('/texture/texture/objects/<model("texture.texture"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('texture.object', {
#             'object': obj
#         })
