function addbill() {

    
    document.getElementById('addBillForm').style.opacity = "1";
	document.getElementById('addBillForm').style.top = "10%";
	document.getElementById('addBillForm').style.right = "34%";
	document.getElementById('addFriendForm').style.visibility = "hidden";
    document.getElementById('mainContainer').style.opacity = "0.2";
    document.getElementById('addBillForm').style.zIndex = "100";
    var d = new Date();
    var m = d.getMonth() + 1;
    var dat = d.getDate();
    var y = d.getFullYear();

    document.getElementById('showdateValue').value = m + "/" + dat + "/" + y;

};
function closeBillForm() { 
    document.getElementById('mainContainer').style.opacity = "1";
	document.getElementById('addBillForm').style.top = "0%";
	document.getElementById('addFriendForm').style.visibility = "visible";
    document.getElementById('addBillForm').style.opacity = "0";
	 document.getElementById('addBillForm').style.zIndex = "-1";
};

function closeFriendForm() {
alert("kjhnwww");
    document.getElementById('mainContainer').style.opacity = "1";
    document.getElementById('addFriendForm').style.opacity = "0";
	 document.getElementById('addBillForm').style.visibility = "visible";
};



function addFriend() {
	document.getElementById('addFriendForm').style.top = "10%";
    document.getElementById('addFriendForm').style.opacity = "1";
    document.getElementById('mainContainer').style.opacity = "0.2";
	 document.getElementById('addBillForm').style.visibility = "hidden";

};