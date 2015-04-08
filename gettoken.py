__author__ = 'Sam'
import cgi
import urllib
import requests
import base64
import json
from mod_python import apache


def handler(req):
    req.content_type = 'text/plain'

    api_key = urllib.quote('EG256Euv4bVpbcAx6F8QjiCQ3')
    secret_key = 'p19nAu1GmoyJX2EGeN5DRAk4yJ9jDeFZOiqpsL4gWCbp0JEykv'
    str_req = '{0}:{1}'.format(api_key, secret_key)
    base64_str = base64.b64encode(str_req)
    oauthurl = 'https://api.twitter.com/oauth2/token'

    payload = 'grant_type=client_credentials'
    oauthheaders = {'Authorization': 'Basic {0}'.format(base64_str),  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}

    r = requests.post(oauthurl, data=payload, headers=oauthheaders)
    response = r.text
    print json.loads(response)['access_token']

    return apache.OK