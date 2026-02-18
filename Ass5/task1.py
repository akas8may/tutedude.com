import json

# Load student data from JSON file
with open('student.json') as f:
    students = json.load(f)

student= input("Student Name:")
# Find the student in the data
student_info = filter(lambda s: s['name'] == student, students)
if student_info:
    student_info = list(student_info)[0]
    print(f"Name: {student_info['name']}")
    for subject in student_info['subjectMark']:
        print(f"{subject['subject']}: {subject['mark']}")
        mark= input(f"Enter mark for {subject['subject']}: ")
        subject['mark'] = mark
     
    with open('student.json', 'w') as f:
       json.dump(students, f)

else:
    print("Student not found.")

