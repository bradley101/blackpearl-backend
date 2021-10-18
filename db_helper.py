'''
    Please run
        python -m pip install requests
    before using this

    runs on python 2.x

    usage:
        Call sendNotification() with the params to save the notification in 
        the database and send notification to the devices
'''
import requests, json

def format_to_unicode(d):
    return u'{}'.format(d)

ftu = format_to_unicode

notification_server = 'http://localhost:3443'

def sendNotification(strMsg, strSeverity, strAutoInductId, numTimestamp):
    try:
        r = requests.post('{}/notify'.format(notification_server), json={
            ftu("message"): ftu(strMsg),
            ftu("severity"): ftu(strSeverity),
            ftu("timestamp"): numTimestamp,
            ftu("inductId"): ftu(strAutoInductId)
        })
        if r.status_code == 200:
            print (r.status_code, "Notification send to devices")
        else:
            print(r.status_code, r.reason)
    except Exception as e1:
        print ("Exception occurred - ", e1)

if __name__ == "__main__":
    test_notification = ["Important and Complex msg", "1", "490", 565465456]
    sendNotification(*test_notification)

