import flask
from flask import Flask

app = Flask(__name__)

ranks=["PV1","PV2","PFC","SPC","CPL","SGT","SSG","SFC","MSG","1SG","SGM","CSM",
       "WO1","CW2","CW3","CW4","CW5",
       "2LT","1LT","CPT","MAJ","LTC","COL"]

@app.route('/')
def hello_world():
    return flask.render_template('basic.html', ranks=ranks)


if __name__ == '__main__':
    app.run()
