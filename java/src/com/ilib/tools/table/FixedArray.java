/**
 * FixedArray.java - fixed size array class 
 *
 * Copyright © 2014 JEDLSoft, All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.ilib.tools.table;

import java.util.Arrays;

/**
 * @author edwin hoogerbeets
 *
 */
public class FixedArray {
	protected int[] entries = null;
	public FixedArray(int size) {
		entries = new int[size];
	}
	
	public int get(int index)
	{
		return entries[index];
	}
	
	public void put(int index, int value)
	{
		entries[index] = value;
	}
	
	public void fill(int value)
	{
		Arrays.fill(entries, value);
	}
	
	public int size()
	{
		return entries.length;
	}
}
