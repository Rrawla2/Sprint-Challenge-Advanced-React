- [ ] Why would you use class component over function components (removing hooks from the question)?

    A class component extends the React Component class, giving it access to all of the methods available to the Component class.  An example of this would be the componentDidMount() lifecycle method.  

- [ ] Name three lifecycle methods and their purposes.

    render() is required for every class component and it will return JSX, Arrays, Strings or Numbers and Booleans.  It should not modify any component state.
    componentDidMount() is called when the component is first rendered or mounted and is the best place to call any API.
    componentWillUnmount() is called right before the component is removed from the DOM and should be used for any cleanup.


- [ ] What is the purpose of a custom hook?

    A custom hook should allow you to reuse functions and call other hooks.

- [ ] Why is it important to test our apps?

    Testing saves time overall, testing for possible bugs.  Testing can save money testing for bugs before the project gets too big.  Testing allows for better documentation and has us think about edge cases.