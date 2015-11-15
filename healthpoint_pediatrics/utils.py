""" This file contains different utility functions and data """
import datetime
from django.utils import timezone
import pytz

# contains regular weekly work schedule
schedule = [    
    {   "short_name": "Sun",
        "long_name": "Sunday",
        "open": False, 
        "start": 0,
        "end": 0 },
        
    {   "short_name": "Mon",
        "long_name": "Monday",
        "open": True,
        "start": 8,
        "end": 19 },
        
    {   "short_name": "Tue",
        "long_name": "Tuesday",
        "open": True, 
        "start": 8,
        "end": 19 },
        
    {   "short_name": "Wed",
        "long_name": "Wednesday",
        "open": True, 
        "start": 8,
        "end": 20 },
        
    {   "short_name": "Thu",
        "long_name": "Thursday",
        "open": True, 
        "start": 8,
        "end": 19 },
        
    {   "short_name": "Fri",
        "long_name": "Friday",
        "open": True, 
        "start": 8,
        "end": 14 },
        
    {   "short_name": "Sat",
        "long_name": "Saturday",
        "open": True, 
        "start": 10,
        "end": 13 }
    ]

def work_today():
    pass
 
 
################################################################################   

if __name__ == "__main__":
    work_today()
    
