j = ["cake", "apple pie", "cookie", "chips", "patties"];
ans = input("Enter item to search ");
arrLen = j.length;
for (i=0; i < arrLen ; i++) {
    if (ans = j[i]) {
        document.write("Contratulations" + " <br> \n");
        break;
    }
    else {
        document.write("Item not found" + " <br> \n");
    }
}
