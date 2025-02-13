# TWO TYPES OD IMPORT / EXPORTS

******DEFAULT EXPORT/IMPORT
---export default componnets
---import componets from "path"

******NAMED EXPORT/IMPORT
---export const componets
---import{componnet} from "path"

# React Hooks
(normal js utility function)
-useState() -state variable in react
-useEffect() -Fetching data , Subscribing to events ,Manually manipulating the DOM , Setting up timers

               Every render	    No array	On every re-render
               Only on mount	[]	        Once when mounted
               On value change	[var]	    When var changes
               Cleanup effect	return () => {...}	Before component unmount

-useParams() -allows you to access URL parameters in a component ,commonly used in dynamic routes where parts of URL change based on user input.

               Single param  	/user/:id	            { id: "123" }
               Multiple params	/product/:category/:id	{ category: "phone", id: "42" }
               Fetching data	/user/:id	            Fetches user data for id
               
# 2 types of routing                                  
                      Feature	                Client-Side Routing	               Server-Side Routing
                      Where Routing Happens?	Browser (JavaScript)	           Server (Backend)
                      Navigation Speed	        Faster (No full reload)	           Slower (Full page reload)
                      Initial Load Speed	    Slower (Loads JS bundle)	       Faster (Loads only required HTML)
                      SEO Friendliness	        ❌ Worse(Requires extra work)	 ✅ Better (Full pages are indexed)
                      Works Without JS?	        ❌ No	                         ✅ Yes
                      Deep Linking Issues?	    ✅ No(if server is configured)	 ✅ No


# super(props) 
In React class components, super(props) is used inside the constructor to call the parent class (React.Component) constructor and pass the props.When you create a class component, it inherits from React.Component. The parent class (React.Component) has its own constructor, and to properly initialize it, you must call super().

               Scenario	                               Do You Need super(props)?	Why?
               Using this.props in constructor	       ✅ Yes	                  super(props) initializes this.props
               Not using this.props in constructor	   ❌ No	                      super() is enough
               No constructor at all	               ❌ No	                      Use state without constructor