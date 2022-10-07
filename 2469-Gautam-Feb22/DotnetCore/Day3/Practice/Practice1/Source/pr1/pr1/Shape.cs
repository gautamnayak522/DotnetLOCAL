using System;
using System.Collections.Generic;
using System.Text;

namespace pr1
{
    abstract class Shape
    {
        public abstract int area();
    }

    class square : Shape
    {

        private int side;
        public  square(int x)
        {
            side = x;
        }

        public override int area()
        {
            Console.WriteLine("Area of Square  :");
            return (side * side);
        }
    }

    class triangle : Shape
    {
        private int height;
        private int baset;

        public triangle(int h,int b)
        {
            height = h;
            baset = b;
        }
        public override int area()
        {
            Console.WriteLine("Area of Triangle is :");
            return (height * baset) / 2;
        }
    }
}
