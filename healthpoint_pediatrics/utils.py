""" This file contains different utility functions and data """
import datetime
from django.utils import timezone
import pytz

# contains regular weekly work schedule
schedule = {
    'monday': { 'open': True,
                'start': 8,
                'end': 19 },
    'tuesday': { 'open': True, 
                 'start': 8,
                 'end': 19 },
    'wednesday': { 'open': True, 
                'start': 8,
                'end': 20 },
    'thursday': { 'open': True, 
                 'start': 8,
                 'end': 19 },
    'friday': { 'open': True, 
                 'start': 8,
                 'end': 14 },
    'saturday': { 'open': True, 
                 'start': 10,
                 'end': 13 },
    'sunday': { 'open': False, 
                 'start': 'closed',
                 'end': 'closed' }
    }

def work_today():
    utc = pytz.utc
    dt = utc.localize(datetime.datetime.now())
    
    eastern = pytz.timezone('US/Eastern')
    print(dt, dt.astimezone(eastern))
    
if __name__ == '__main__':
    work_today()
    
