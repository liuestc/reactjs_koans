var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We will make a reactive grocery list.
//
// Task: Fill the `return` of `GroceryList` render method. It should return
//       a list of `GroceryListItem`. You need to display the groceries names
//       using `this.props` in `GroceryListItem`. We already prepared the variable
//       `groceriesComponents` inside `render` method containing a list of these items for you.

// 完成　GroceryList render()方法中的return ,他应该返回一个GroceryListItem
// 你需要展示groceries的name属性，使用this.props　在GroceryListItem。
//我们已经为你准备了一个groceriesComponents在render方法中

//  元素ＬＩＳｔ　　设置state为一个json，返回render方法　首先设置数组，遍历json方法，将<LISTITEM>置入设置好的数组，现在这个
// groceriesComponents=[<GroceryListItem grocery=this.state.groceries[index] >]  return GroceryListItem



class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [ { name: "Apples" } ]
    };
  }

  render() {
    let groceriesComponents = [];
    // Properties are a way to pass parameters to your React components.
    // We mentioned this in the third exercise. Properties are to React
    // components what attributes are to HTML elements.
    //
    // Below you can see how to pass properties to child components.
    // We have defined a `grocery` property for each `GroceryListItem`.
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryListItem
            grocery={this.state.groceries[index]}
            key={index}
          />
      );
    }

    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        // Put your code here
        <ul>
         {groceriesComponents}
        </ul>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

          // Put your code here.
         return(
            <li key={this.props.key}>{this.props.grocery.name}</li>
          )


  }
}

export default GroceryList;
