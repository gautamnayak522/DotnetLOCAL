A module is a way to create a group of related variables, functions, classes, and interfaces, etc. It executes in the local scope, not in the global scope. 
the variables, functions, classes, and interfaces declared in a module cannot be accessible outside the module directly. We can create a module by using the export keyword and can use in other modules by using the import keyword.
We can declare a module by using the export keyword.
We can use the declare module in other files by using an import keyword, which looks like below. The file/module name is specified without an extension.
import { class/interface name } from 'module_name';  