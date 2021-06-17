activate_this = '/var/www/troops2seats/venv/bin/activate_this.py' #modify as applicable
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))
import sys
sys.path.insert(0, '/var/www/troops2seats')
from app import app as application
