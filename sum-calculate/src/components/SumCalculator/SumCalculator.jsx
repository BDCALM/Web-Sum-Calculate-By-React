import React, { useState } from 'react';
// 1. Import CSS Module. Biến 'styles' sẽ là một object
//    chứa tất cả các class từ file .css 
import styles from './SumCalculator.module.css';

/**
 * Component SumCalculator: Chứa toàn bộ logic tính tổng.
 */
export default function SumCalculator() {
  // State
  // Giá trị nhập cho số thứ nhất
  const [number1, setNumber1] = useState('');
  // Giá trị nhập cho số thứ hai
  const [number2, setNumber2] = useState('');
  // Kết quả tổng (null khi chưa tính)
  const [sum, setSum] = useState(null);
  // Thông báo lỗi sẽ hiển thị cho người dùng
  const [error, setError] = useState('');

  // Logic 
  const handleCalculate = () => {
    setError('');
    setSum(null);

    if (number1.trim() === '' || number2.trim() === '') {
      setError('Vui lòng nhập cả hai số.');
      return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setError('Đầu vào không hợp lệ. Vui lòng chỉ nhập số.');
      return;
    }
    
    setSum(num1 + num2);
  };

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
   
    <div className={styles.calculatorCard}>
      
      <h1 className={styles.title}>
        Sum Calculator
      </h1>

      {/* Sử dụng .inputGroup để bọc cả hai input, giúp căn chỉnh
      */}
      <div className={styles.inputGroup}>
        <div>
          <label htmlFor="number1" className={styles.label}>
            Number 1
          </label>
          <input
            type="text"
            id="number1"
            value={number1}
            onChange={(e) => handleInputChange(e, setNumber1)}
            placeholder="Nhập số thứ nhất"
            className={styles.input}
          />
        </div>
        
        <div>
          <label htmlFor="number2" className={styles.label}>
            Number 2
          </label>
          <input
            type="text"
            id="number2"
            value={number2}
            onChange={(e) => handleInputChange(e, setNumber2)}
            placeholder="Nhập số thứ hai"
            className={styles.input}
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className={styles.button}
      >
        Calculate Sum
      </button>
      
      <hr className={styles.divider} />

      <div className={styles.resultArea}>
        {error && (
          <p className={styles.error}>
            {error}
          </p>
        )}

        {sum !== null && !error && (
          <p className={styles.result}>
            Result: <span>{sum}</span>
          </p>
        )}
      </div>
    </div>
  );
}