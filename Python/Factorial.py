def getIntInput():
    return int(input("Enter value"))

def calculateFact(number):
    res = 1
    for i in range(1,number+1):
        res = res * i
    return res;

def printValue(num,val):
    print("The factorial of",num, "is :",val)
    

def main():
    number = getIntInput()
    value = calculateFact(number)
    printValue(number,value)

main()