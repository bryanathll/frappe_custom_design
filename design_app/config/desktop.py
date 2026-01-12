from frappe import _

def get_data():
    return [
        {
            "module_name": "Custom UI",
            "color": "#4F46E5",
            "icon": "octicon octicon-paintcan",
            "type": "module",
            "label": _("Custom UI"),
            "link": "#custom-ui",
            "hidden": 1  # Hidden from desktop, hanya untuk customisasi
        }
    ]