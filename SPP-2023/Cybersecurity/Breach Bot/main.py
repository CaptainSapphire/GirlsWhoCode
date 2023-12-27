#Breach Bot Starter Code
breachYear = 2017

#Greets user
print("Hello! I'm Breachbot.")
userName = input("What is your name?\n")
print("Nice to meet you " + userName)

#Recounts year of breach
todaysYear = input("What year is it?\n")
timePassed = int(todaysYear) - breachYear
print("Wow! That means it has been " + str(timePassed) + " years since the National Health Services data breach!")


#Introduces breach
print("Would you like to learn about the National Health Services data breach?")
giveInfo = input("Type 'yes' or 'no'\n")

#Explains pillars of CIA Triad
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) breach details (b) organization's response, or (c) I would like to hear your reflection.")
  topic = input()

  if topic.lower() == "a":
    print("A ransomware strain known as Wanna Decryptor (also known as WannaCry) where medical records and other pieces of key information was encrypted or scrambled, with the decryption key being held by a hacker. To quote: 'According to researchers, the attack makes use of an exploit called EternalBlue, believed to have been be developed by the NSA to break through Windows security. EternalBlue was made public as part of a Shadow Brokers dump in April, and its code is widely available to anyone who downloaded the dump. Microsoft issued an update to protect against the vulnerability more than a month before the Shadow Brokers made it public, but the update didn’t make it to every Windows machine, and it’s plausible the systems targeted today were still unpatched' (https://www.theverge.com/2017/5/12/15630354/nhs-hospitals-ransomware-hack-wannacry-bitcoin).")
  
  elif topic.lower() == "b":
    print("'Microsoft released out-of-band security updates for end-of-life products Windows XP, Windows Server 2003 and Windows 8; these patches had been created in February, but were previously only available to those who paid for a custom support plan.' Hospitals were able to recover after a short while because it was not horrible damage. The attackers identities were never found. ")
  
  elif topic.lower() == "c":
    break
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Introduces my take
print("\nI'm excited to share my perspective with you. Are you ready to hear my take?")
giveInfo = input("Type 'yes' or 'no'\n")

#Shares my take
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) relation to CIA Triad, (b) my reaction, (c) my advice, (d) none")
  topic = input()

  if topic.lower() == "a":
    print("The National Health Services data breach in 2017 connects to the CIA triad: Confidentiality because WannaCry gained access to users’ and customers’ medical records that were intended to be private.")

  elif topic.lower() == "b":
    print("We agree with the organization's response because the patch was necessary. So much was at risk and needed to be repaired immediately (the data, the exploit itself, etc), and a next-day fix from Microsoft was the right move.")

  elif topic.lower() == "c":
    print("I would advise victims to take action by updating to the newest version and locking down any personal accounts that possibly had the data leaked within the breach. I would convince them by showing cases from people who didn’t do such, provided by various articles from a quick Google search. ")
  elif topic.lower() == "d":
    break
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")

input("Press enter to continue\n")
print("Please check out these resources to ensure your information's safety online!")
print("> https://haveibeenpwned.com/")
print("> https://www.zdnet.com/article/were-you-caught-up-in-the-latest-data-breach-heres-how-to-tell/")
print("> https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/quiz/basics")
print("> https://www.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity")
print("Thank you for your time. Have a nice day.")
