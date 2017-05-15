**fherzog2 @fherzog2 May 14 14:03**
> If you're on Windows, you just need to edit these lines:
> 
> * https://github.com/FLIF-hub/FLIF/blob/master/build/MSVC/Makefile#L11
> * https://github.com/FLIF-hub/FLIF/blob/master/build/MSVC/dl_make_vs.bat#L54
> 
> Set `Rt = MT` and it will be compiled with static runtime.

**The Jared Wilcurt @TheJaredWilcurt May 14 14:04**
> Cool, but what about for Linux and OSX builds

**fherzog2 @fherzog2 May 14 14:15**
> Don't know for sure about Linux and OSX
> But on Linux, shouldn't the user already have installed all requirements. They are pretty basic.

**Leo Izen @thebombzen May 14 14:19**
> the question is relevant to `C++`
> the way you'd do it is by compiling each `.cpp` file to an object file (`.o`) without linking by using `g++ -c`
> then once you have serveral .so files, you put them in an ARchive with "ar" and ranlib it
> which gives you a static library
> then you can run `g++ -shared -o libflif.so libflif.a` to link it into a shared library or you can run `g++ -o flif flif.cpp -L. -lflif` to create the flif binary from the static library

**The Jared Wilcurt @TheJaredWilcurt 01:06**
> @thebombzen I have no idea how to do that or what most of that even means. Would you be able to create a script file that automates that. Then I can do the builds on each new release.

**Leo Izen @thebombzen 01:09**
> this is why I thought it was relevant to ask the `C++` people
> If you have a program composed of several JavaScript source files, functions in one can be referenced from another. This is basically what "linking" is with `C++`, the compilation process is a 2-step process. first, `g++` (or whatever you're using) turns the source into an object file by compiling `C++` code to machine code. But an object file isn't actually something you can do anything with. It contains the machine code for everything in the source file, and basically nothing else.
> Linking is the process of taking several object files or libraries and putting them together to get a useful executable.
> 
> By default the compiler uses a shortcut and doesn't actually dump the object files to disk. But in order to do what you want, you'd need to tell it not to do that.
> If compile all the `.cpp` files to objects, and then from there you can do lot of things with them. You could create a shared library like libflif, you could create a flif executable, etc.
> 
> Currently the makefile creates a shared library, and then has flif reference that library. You said you don't want that. So you'd need to have compile the `C++` sources directly to the flif executable without passing GO.
> A long-term solution is to compile the `C++` sources to object files so you don't have to compile them twice, but if you really want to, then well
> 
> **TLDR:** Go to the Makefile and change this line:
> ```
> $(CXX) -std=gnu++11 $(CXXFLAGS) $(OPTIMIZATIONS) -g0 -Wall flif.cpp $(LDFLAGS) -L. -lflif -o flif
> ```
> to this one:
> ```
> $(CXX) -std=gnu++11 $(CXXFLAGS) $(OPTIMIZATIONS) -g0 -Wall $(FILES_CPP) flif.cpp $(LDFLAGS) -o flif
> ```
> although on Linux I recommend something else
