export class ArrayHelper{
    public static ToDistinct<T>(array: Array<T>) : Array<T> {
        return array.filter((current, index, array) => array.indexOf(current) == index);
    } 
}