from customer import load_customers
from functions import fn1_insert_customer_info, fn2_insert_customer
from functions import fn3_delete_customer, fn4_insert_customer
from functions import fn5_insert_customer, fn9_insert_customer

def main():
    global customer_list
    customer_list = load_customers()
    while True:
        print('1:입력| 2:전체출력| 3:삭제| 4:이름검색| 5:csv:내보내기| 9:종료', end='')
        fn = input('메뉴 선택 : ')
        if fn == '1':
            customer = fn1_insert_customer_info()
            customer_list.append(customer)
            #print('fn1_호출')
        elif fn=='2':
            fn2_insert_customer(customer_list)
            #print('fn2_호출')
        elif fn=='3':
            fn3_delete_customer(customer_list)
            #print('fn3_호출')
        elif fn=='4':
            fn4_insert_customer(customer_list)
            #print('fn4_호출')
        elif fn=='5':
            fn5_insert_customer(customer_list)
            #print('fn5_호출')
        elif fn=='9':
            fn9_insert_customer(customer_list)
            #print('fn9_호출')
            break
        else:
            print('보기중에서 고르시오.')
            break

if __name__=='__main__':
    main()