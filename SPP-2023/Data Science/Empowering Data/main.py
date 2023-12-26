# This code is written in python
# The pandas library is used for data processing and to read data files
import pandas as pd 
#The matplotlib library is used to plot histograms and scatter plots
import matplotlib.pyplot as plt
# The GWCutilities has functions to help format data printed to the console
import GWCutilities as util

# Read a comma separated values (CSV) files into a variable
# as a pandas DataFrame
lwd=pd.read_csv("livwell135.csv")

#Analysis
print("Senegal is a beautiful country in Africa, that has a a dry season from roughly October to May and a rainy season from June to September.")
print("And here, families are patriarchal. Women have control of one thing: ")
print("Household chores and duties.")

print("Since 1995, the rate of education has been increasing, aka, the rate of no education is decreasing (see the blue line). This gives them more capability to have more control because they have more knowledge.")
print("Since 1995, the ability of women to make decision on purposes has remained the same.")
print("Since 1995, the marital rate has decreased.")
print("Since 1995, women have more capability, yet has not gained the final say of the one thing she should; Household related purchases.")

print("Let's say we have an educated woman named Abdoulaye. Her mother had no decision making in household purchases, which frustrated both of them. So, Abdoulaye gets an education and believes that this would grant her control. However this tradition does not break when she gets married. She gets aggravated. The one place she is granted control, household duties, she can't even have a final say. She has educated herself, she struggled and overcame. So why is she so undermined?")
print("This was a hypothetical story, but it brings up my point. So...")
print("I ask you; Does the decreasing rate of marriage mean that perhaps, these circumstances are not desirable? Why shouldn't more women be given more power?")
print("Why is it that as women get more education, they get less say in household where they are supposed to have control? Is the decreasing marriage rate in Senegal because of the lack of control for women?")

# Print out the number of rows and columns
print(lwd.shape)

#  basic colors:
# 'blue', 'green', 'red', 'cyan', 'magenta', 'yellow', 'black', 'white'
oneCountryBooleanList = lwd["country_name"]=="Senegal"
oneCountryData = lwd.loc[oneCountryBooleanList]

# create a scatter plot
xval = oneCountryData["year"]
yval1 = oneCountryData["DP_decide_large_purchase_p"]
yval2 = oneCountryData["ED_attainment_no_educ_p"]
yval3 = oneCountryData["DM_nvr_marr_p"]

plt.scatter(xval, yval1, color="red", label="Women who have the final say on large household purchases(%)")
plt.scatter(xval,yval2, color="blue", label="Women with no education (%)")
plt.scatter(xval,yval3, color="green", label = "Women never married (%)")

# add a title to the plot
plt.title("Women: Never married, Not Educated, and Decision Power")

#Label the x-axis
plt.xlabel("Year")

# label the y-axis
plt.ylabel("Married v. No Education v. Decision Power on Household Purchases")

plt.legend(loc = "upper right")
# show the plot
plt.show()

