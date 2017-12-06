"""
Supreme bot????

"""
import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import selenium.webdriver.support.expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options

path_to_chromedriver = '/Users/Alan/Desktop/Github/SupremeBot/chromedriver'
url = "https://www.supremenewyork.com/shop/new"
path_to_log = '/Users/Alan/Desktop/'
log_errors = open(path_to_log + 'log_errors.txt', mode = 'w')
userProfile = "C:/Users/Alan/AppData/Local/Google/Chrome/User Data"


chop = webdriver.ChromeOptions()
chop.add_argument("user-data-dir=C:/Users/Alan/AppData/Local/Google/Chrome/User Data")


def initDriver():
    driver = webdriver.Chrome(executable_path=path_to_chromedriver, chrome_options=chop)
    driver.get(url)
    
    return driver

def buyItem(theDriver):
    try:
        #Item you're trying to buy
        item = theDriver.find_element_by_xpath('//*[@id="container"]/article[44]/div/a').click()
    except TimeoutException:
        log_errors.write('Couldn\'t locate item' + '\n')

def addCart(theDriver):
    try:
        print "Adding to Cart..."
        addCart = WebDriverWait(theDriver, 120).until(EC.element_to_be_clickable((By.NAME, 'commit')))
        print addCart.get_attribute("value")
        addCart.click()
    except TimeoutException:
        print "Sold out!"
        log_errors.write('Sold out' + '\n')

def checkout(theDriver):
    try:
        print "Checking out..."
        checkout = WebDriverWait(theDriver, 120).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="cart"]/a[2]')))
        time.sleep(.25)
        checkout.click()
    except TimeoutException:
        print "Rip!"
        log_errors.write('Error' + '\n')

def fillInfo(theDriver):
    try:
        print "Entering info..."
    except TimeoutException:
        print "Error filling info"

def readAndAgree(theDriver):
    try:
        print "Clicking agree..."
        
        #agree = theDriver.find_elements_by_css_selector('.iCheck-helper')
        #agree[1].click()
        
        agree = WebDriverWait(theDriver, 120).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.iCheck-helper')))
        agree[1].click()
    except TimeoutException:
        print "Not found"
def main():
    print "Bot running"
    driver = initDriver()
    buyItem(driver)
    addCart(driver)
    checkout(driver)
    readAndAgree(driver)
    while True:
        time.sleep(50)

if __name__ == '__main__':
    main()
    print "Finished"





    
