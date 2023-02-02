def getFloatInput():
    return float(input())

def getIntInput():
    return int(input())

def calculateSimpleIntrest(pAmount, rate, time):
    res = (pAmount * rate * time) / 100
    return res

def printValues(num):
    print("Result:",num)

def main():
    print("Enter Principle: ")
    pAmount = getFloatInput()
    print("Enter Rate of intrest: ")
    rate = getFloatInput()
    print("Enter Time: ")
    time = getIntInput()

    result = calculateSimpleIntrest(pAmount,rate,time)
    printValues(result)

main()