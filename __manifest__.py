# -*- coding: utf-8 -*-
{
    'name': "Texture",
    'summary': """
Sélécteur de texture
""",
    'description': """
Dévelopment module Javascript
    """,
    'author': "Franck Matherat",
    'website': "http://www.franckysolo-productions.com/",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Tools',
    'version': '0.1',
    'sequence': 1,
    # any module necessary for this one to work correctly
    'depends': ['web', 'website'],
    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'qweb': ['static/src/xml/texture_picker.xml'],
    'installable': True,
    'auto_install': False,
}
