<?php


class TestCVersion
{
    /*
     * 功能是求出字符 s 与字符串t的第二公共单词(这里，假设两个字符串均由英字母和空格字符组成);若找到这样的公共单词，函数返回该单词，否则，函数返回NULL，如果有多个满足要求，则返回第一个单词。
     * 将字符串S和T分割，然后一一比较
     * 空间复杂度O(m+n)
     * 时间复杂度O(mn)
     */

    public function findFirstEqualWord($_strS,$_strT){
        $_arrS = explode(" ",$_strS);
        $_arrT = explode(" ",$_strT);
        foreach ($_arrS as $_keyS => $_valueS){
            foreach ($_arrT as $_keyT => $_valueT){
                if($_valueS == $_valueT){
                    return $_valueT;
                }
            }
        }
        return 'NULL';
    }

    /*
     * 功能是求出字符 s :整数N对应的所有分解组合，按照每个分解中的最小整数从小到大输出，每个分解占一行 ，每个数字之间有一个空格(每行最后保留一个空格);如果没有任何分解组合，则输出NONE。
     * 从1开始一一尝试，有符合条件的就输出 对于整数N，过半再相加则必定大于N，例如10的一半是5，5+6肯定大于10，则不用考虑5以后
     * 空间复杂度O(1)
     * 时间复杂度O(n^2/2)
     */
    public function interDecomposition($_intN){
        $_intFlag = 0;
        if($_intN == 0){
            echo "NONE";
        }
        if($_intN == 1){
            echo "0 1";
        }

        for($_i = 1;$_i<= $_intN/2;$_i++){
            $_intSum = 0;
            // 从$_i开始 ，接着往后数，如果已经大于给出的整数N则没有符合要求的
            for($_k = $_i;$_k <= $_intN;$_k++){  //这里如果要提高效率的话条件可改为$_k<= $_intN/2+2
                if($_intSum > $_intN){ // 大于N，跳出循环
                    break;
                }
                if($_intSum == $_intN){
                    $_intFlag = 1;
                    for($_j = $_i;$_j < $_k;$_j++){
                        echo $_j . " ";
                    }
                    echo "</br>";  //换行
                }
                $_intSum = $_intSum + $_k;
            }
        }

        if($_intFlag == 0){
            echo "NONE";
        }
    }

}