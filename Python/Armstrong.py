InputNumber = int(input())

arrayOfDigits = []

temp = InputNumber;
counter = 0;

while(temp > 0):
    arrayOfDigits.append(temp%10)
    temp = int(temp/10)
    counter+=1

calculatedNumber = 0
for i in range(0,counter):
    calculatedNumber += pow(arrayOfDigits[i],3)

if(InputNumber == calculatedNumber):
    print(InputNumber, "is an Armstrong number")
else:
    print(InputNumber, "is not an Armstrong number")