#ifndef ITEM_H
#define ITEM_H

#include <iostream>
#include <string>

using namespace std;

class Item{
	public:
		Item(){
			price = 0;
			name = "";
		}

		Item(double thePrice, string theName){
			price = thePrice;
			name = theName;
		}

		string getName() const{
			return name;
		}

		void setName(string newName){
			name = newName;
		}

		double getPrice() const{
			return price;
		}

		void setPrice(double newPrice) {
			price = newPrice;
		}

	private:
		double price;
		string name;
}