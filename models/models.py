# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Textures(models.Model):
    _name = 'texture.textures'

    id = fields.Integer()
    name = fields.Char()
    label = fields.Char()
