# REST-REACT-FPMS
publication management system  
It is better to clear the pycache files(if any present) before running the following commands.  
 ```
TERMINAL

REST-REACT-FPMS> npm install
              pip install -r requirements.txt
              npm run dev
              python manage.py makemigrations accounts
              python manage.py makemigrations papers
              python manage.py migrate
REST-REACT-FPMS/proj_fpms>python manage.py runserver
```
If on linux use command 'npm rebuild' before 'npm run dev'  
  
For register authentication mail:  
  add your email and password to your device environment variables as:  
```
EMAIL_USER: your email  
EMAIL_PASSWORD: your password  
```
