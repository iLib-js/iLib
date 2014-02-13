/*
 * RuleSet.java - 
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
package com.ilib.tools.zic;

import java.util.ArrayList;
import java.util.Collections;

/**
 * RuleSet - models a set of rules that document when to start and stop observing
 * daylight savings time across a number of time frames. 
 * 
 * Rules often come in pairs to
 * tell how to start and end daylight savings time within a particular year, and only
 * one pair of rules should be valid for any particular time frame. One 
 * particular pair of rules will be considered the current rule that is in effect for
 * the zone. The current rules stay in effect until the 
 * government overseeing the time zone decides to change the rules.
 * 
 * @author edwin
 */
public class RuleSet
{
    protected String name;
    protected ArrayList<Rule> rules = new ArrayList<Rule>();
    
    public RuleSet()
    {
    }
    
    public String getName()
    {
        return name;
        
    }
    
    public void setName(String name)
    {
        this.name = name;
    }
    
    public void add(Rule rule)
    {
        rules.add(rule);
    }
    
    public void sortRules()
    {
        Collections.sort(rules);
    }
    
    public ArrayList<Rule> getRules()
    {
        return rules;
    }
}
