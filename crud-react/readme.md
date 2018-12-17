# Bancacy
CRUD using React-Redux

## Notes

* I have not used any unsafe methods like componentWillMount, componentWillReceiveProps and componentWillUpdate as after update these methods are deprecated and it is not recommended to use them. FYI [react-lifecycle](https://reactjs.org/docs/react-component.html)
* I have use seperate reducer to make the scaling easy.
* I have used axios as async await and promises becomes easy with axios
* The apis at reqres.in does provide fake data so every operation is on different page.
* Please ignore some warnings as I was more into the serving what is needed then eslint errors and other UI fixes.
* I have added pagination by applying logic on the list part. 
* Validations are done for name and job only alphabets are allowed
* 404 is handled
