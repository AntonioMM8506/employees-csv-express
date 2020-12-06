# employees-csv-express
Enroute Systems: Excercise with Node and JS

Requirements:

Node JS
Express JS
IDE or some text editor for JavaScript
Instructions:

clone this project
in the terminal, change directory to the path og the cloned project
input as below:
"""
node script.js employees.csv 1
"""
or 
"""
node script.js employees.csv 1 email
"""
The first command will display you all the information of the row number you have given, in this case 1. This case is mandatory, otherwise it will return an error message.

On your prefered browser, on the navigation bar just try: http://localhost:3000/employee/1 The last element, the "1" is because of the given parameter. 

The second one will display you, only the selected field followed by the id, so, in this example this will return you the ip_address of the row number 1. So, the last parameter in this case is optional.

On your prefered browser, on the navigation bar just try: http://localhost:3000/employee/1/email The last element, the "email" is because of the given parameter. 

there are four fields to look after:

first_name
lasta_name
email
ip_address
